<script setup lang="ts">
import {ref} from 'vue'
import {onMounted} from 'vue'
import {Tabs} from "flowbite";
import type {TabsOptions, TabsInterface, TabItem} from "flowbite";

onMounted(() => {
  const tabElements: TabItem[] = [
    {
      id: 'technical',
      triggerEl: document.querySelector('#technical-tab')!,
      targetEl: document.querySelector('#technical')!
    },
    {
      id: 'soft',
      triggerEl: document.querySelector('#soft-tab')!,
      targetEl: document.querySelector('#soft')!
    },
    {
      id: 'certificates',
      triggerEl: document.querySelector('#certificates-tab')!,
      targetEl: document.querySelector('#certificates')!
    },
    {
      id: 'education',
      triggerEl: document.querySelector('#education-tab')!,
      targetEl: document.querySelector('#education')!
    }
  ];
  const options: TabsOptions = {
    defaultTabId: 'settings',
    activeClasses: 'border-b-3 border-black',
    inactiveClasses: 'hover:border-gray-300',
    onShow: () => {
    }
  };

  const tabs: TabsInterface = new Tabs(tabElements, options);

  tabs.show('technical');
})


const count = ref(0)
</script>

<template>
  <section id="about" class="py-24">
    <h2 class="numbered-heading text-4xl font-semibold leading-tight capitalize">About Me</h2>
    <div class="inner ">
      <div class="mt-14 md:w-1/3">
        <p>Hello! My name is Konstantins and I enjoy building systems. My interest in programming
          started back in 2012 when I found out, that there is much more you can do with a computer.
          In the beginning I was having a lot of fun with just HTML & CSS, later experimenting with scripting.</p>
        <p>Fast-forward to today, and I’ve had the privilege of working at <a href="https://www.accenture.com/lv-en"
                                                                              rel="noopener noreferrer" target="_blank">an
          IT services and consulting company</a>, <a
            href="https://www.caru-care.com/" rel="noopener noreferrer" target="_blank">a start-up</a>, <a
            href="https://www.rtu.lv/en" rel="noopener noreferrer" target="_blank">university</a>, and <a
            href="https://www.lmt.lv/lv/" rel="noopener noreferrer" target="_blank">telecommunication company</a>.

          My main focus these days is building accessible, scalable, high demand systems for a variety of
          clients.
        </p>
      </div>
      <div class="md:w-2/3 skills">
        <div class="mb-4 dark:border-gray-700">
          <ul class="flex flex-wrap justify-center lg:flex-nowrap flow-col -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
              id="tab"
              role="tablist">
            <li class="mr-2" role="presentation">
              <button class="inline-block whitespace-nowrap p-4 border-b-2  rounded-t-lg" id="technical-tab"
                      type="button" role="tab" aria-controls="technical" aria-selected="false">
                Technical skills
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button class="inline-block whitespace-nowrap p-4 border-b-2  rounded-t-lg" id="soft-tab" type="button"
                      role="tab" aria-controls="soft" aria-selected="false">Soft skills
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button class="inline-block p-4 border-b-2  rounded-t-lg" id="certificates-tab"
                      type="button" role="tab" aria-controls="certificates" aria-selected="false">Certificates
              </button>
            </li>
            <li role="presentation">
              <button class="inline-block p-4 border-b-2  rounded-t-lg " id="education-tab"
                      type="button" role="tab" aria-controls="education" aria-selected="false">Education
              </button>
            </li>
          </ul>
        </div>
        <div id="tabContent" class="min-h-full">
          <div class="hidden p-4 rounded-lg" id="soft" role="tabpanel" aria-labelledby="soft-tab">
            <ul class="skills-list">
              <li>Adaptability</li>
              <li>Teamwork</li>
              <li>Ready to accept constructive criticism</li>
              <li>Empathy</li>
              <li>Approachability</li>
              <li>Perseverance</li>
            </ul>
            <div class="flex items-center justify-center w-full">
              <hr class="w-full h-px my-8 bg-gray-300 border-0 dark:bg-gray-700">
            </div>
            <ul class="education-list">
              <li>Gender Balance, Youth Exchange, 2022</li>
              <li>European Solidarity Corp Member, 2022</li>
              <li>Trip to Tolerance: The Evolution participant, Erasmus+, 2018</li>
            </ul>
          </div>
          <div class="hidden p-4 rounded-lg" id="technical" role="tabpanel" aria-labelledby="technical-tab">
            <ul class="skills-list">
              <li>Software development life cycle</li>
              <li>DDD, TDD, BDD</li>
              <li>System design</li>
              <li>DevOps, GitOps, CI/CD</li>
              <li>Full-stack development</li>
              <li>Relational databases, Document stores</li>
              <li>OOP, scripting and markup languages</li>
              <li>Networking</li>
              <li>AWS, GCP, Azure</li>
              <li>Data structures & Algorithms</li>
            </ul>
          </div>
          <div class="hidden p-4 rounded-lg" id="certificates" role="tabpanel" aria-labelledby="certificates-tab">
            <ul class="education-list">
              <li>AWS Cloud Practitioner, 2020</li>
              <li>Oracle Certified Associate, Java SE 8 Programmer, 2019</li>
            </ul>
          </div>
          <div class="hidden p-4 rounded-lg" id="education" role="tabpanel" aria-labelledby="education-tab">
            <ul class="education-list">
              <li>Master of Computer Science, Riga Technical University, Latvia, 2023</li>
              <li>Bachelor of Computer Science, Riga Technical University, Latvia, 2019</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.numbered-heading::before {
  position: relative;
  counter-increment: section 1;
  content: "0" counter(section) ".";
  margin-right: 10px;
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-md), 3vw, var(--fz-xxl));
  font-weight: 400;
}

.numbered-heading {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: clamp(26px, 3vw, var(--fz-heading));
  white-space: nowrap;
}

.numbered-heading::after {
  content: "";
  display: block;
  position: relative;
  width: 100%;
  height: 1px;
  margin-left: 20px;
  background-color: var(--dark-slate);
}

@media only screen and (max-width: 768px) {
  .inner {
    display: flex;
    flex-direction: column !important;
  }
  .skills {
    display: flex;
    flex-direction: column;
  }
}

.inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
}

ul.skills-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 400px));
  gap: 0px 10px;
  padding: 0px;
  margin: 0;
  overflow: hidden;
  list-style: none;
}

ul.skills-list li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: var(--font-mono);
  font-size: var(--fz-md);
}

ul.skills-list li::before {
  content: "▹";
  position: absolute;
  left: 0px;
  font-size: var(--fz-md);
  line-height: 24px;
}

ul.education-list {
  gap: 0px 10px;
  padding: 0px;
  margin: 0;
  overflow: hidden;
  list-style: none;
}

ul.education-list li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: var(--font-mono);
  font-size: var(--fz-md);
}

ul.education-list li::before {
  content: "▹";
  position: absolute;
  left: 0px;
  font-size: var(--fz-xl);
  line-height: 24px;
}
</style>
