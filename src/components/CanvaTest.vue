<script lang="ts">
import { Color, MathUtils, Object3D, AnimationMixer, Clock, Fog, GridHelper, Vector3 } from 'three';
import {
    AmbientLight,
    Box,
    Camera,
    InstancedMesh,
    PhongMaterial,
    Plane,
    Renderer,
    Scene,
    SphereGeometry,
    SpotLight,
    ToonMaterial,
    Text
} from 'troisjs';

import CannonWorld from './CannonWorld';

export default {
    components: {
        AmbientLight,
        Box,
        Camera,
        InstancedMesh,
        PhongMaterial,
        Plane,
        Renderer,
        Scene,
        SphereGeometry,
        SpotLight,
        ToonMaterial,
        Text,
        CannonWorld,
    },
};
</script>

<script setup lang="ts">
import { ref } from 'vue'
import niceColors from 'nice-color-palettes';

const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils;

let COUNT = ref(500)
let imesh

function initIMesh(imesh2: any): void {
    console.log(imesh2);
    imesh = imesh2;
    console.log(imesh)
    const dummy = new Object3D();
    const color = new Color();
    // const cscale = chroma.scale(niceColors[Math.floor(rnd(0, 100))]);
    const scales = new Array(COUNT.value);
    const masses = new Array(COUNT.value);
    const colors = new Array(COUNT.value).fill("#f38630").map(() => niceColors[20][Math.floor(rnd(0, 5))]);
    for (let i = 0; i < COUNT.value; i++) {
        dummy.position.set(rndFS(2), rndFS(5), 0);
        const scale = rnd(0.2, 1);
        scales[i] = scale;
        masses[i] = scale * 0.01;
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        imesh.setMatrixAt(i, dummy.matrix);
        imesh.setColorAt(i, color.set(colors[i]));
        // imesh.setColorAt(i, color.set(cscale(rnd(0, 1)).hex()));
    }
    imesh.instanceMatrix.needsUpdate = true;
    imesh.userData.scales = scales;
    imesh.userData.masses = masses;
    imesh.userData.damping = 0.7;
}

function onBeforeStep() {
    imesh.userData.bodies.forEach(body => {
        if (body.position.y < -7) {
            body.position.set(rndFS(2), rnd(5, 7), 0);
            body.angularVelocity.set(0, 0, 0, 0);
            body.velocity.set(0, 0, 0);
            body.quaternion.set(0, 0, 0, 1);
        }
    });
}
function randomColors() {
    const ci = Math.floor(rnd(0, 100));
    const color = new Color();
    const colors = new Array(COUNT.value).fill("#f38630").map(() => niceColors[ci][Math.floor(rnd(0, 5))]);
    for (let i = 0; i < COUNT.value; i++) {
        imesh.setColorAt(i, color.set(colors[i]));
    }
    imesh.instanceColor.needsUpdate = true;
}
</script>

<template>
    <div class="w-full h-full">
        <Renderer ref="renderer" antialias
            alpha
            :orbit-ctrl="{ autoRotate: true, autoRotateSpeed: 1, enableZoom: false, enableDamping: true, minAzimuthAngle: 0, minPolarAngle: 1.571, maxPolarAngle: 1.571 }"
            resize shadow pointer @click="randomColors">
            <Camera :position="{ z: 15 }" />
            <Scene>
                <AmbientLight color="#aaaaaa" />
                <SpotLight color="#aaaaaa" :intensity="0.5" :position="{ x: 0, y: 1, z: 2 }" :angle="Math.PI / 3"
                    :penumbra="0.5" cast-shadow :shadow-map-size="{ width: 1024, height: 1024 }" />
                <SpotLight color="#ff0000" :intensity="0.5" :position="{ x: 0, y: -1, z: 2 }" :angle="Math.PI / 3"
                    :penumbra="0.5" cast-shadow :shadow-map-size="{ width: 1024, height: 1024 }" />
                <CannonWorld :gravity="{ x: 0, y: -9.82, z: 0 }" @before-step="onBeforeStep">
                    <InstancedMesh ref="imeshC" :count="COUNT" @created="initIMesh" cast-shadow>
                        <SphereGeometry :radius="0.1" :width-segments="16" :height-segments="16" />
                        <ToonMaterial />
                    </InstancedMesh>
                    <Box v-for="i in 6" :key="`box-${i}`" :width="2.8" :height="0.05" :depth="0.2"
                        :position="{ x: (i % 2 === 0 ? 1 : -1) * 1, y: (i - 3.5) * 1.5, z: 0 }"
                        :rotation="{ z: (i % 2 === 0 ? 1 : -1) * Math.PI / 6 }" cast-shadow>
                        <PhongMaterial color="#495670" />
                    </Box>
                </CannonWorld>
            </Scene>
        </Renderer>
    </div>

</template>

<style scoped>
</style>