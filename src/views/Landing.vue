<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-secondary shape-skew">
        <vue-particles
          color="#bf571b"
          :particleOpacity="0.7"
          :particlesNumber="30"
          shapeType="circle"
          :particleSize="50"
          linesColor="#bf571b"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.7"
          :linesDistance="200"
          :moveSpeed="5"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        ></vue-particles>
      </div>
    </section>

    <section class="section">
      <div class="container container-lg">
        <div class="row">
          <tabs>
            <card shadow class="card-profile special">
              <tab-pane id="personal">
                <div slot="title">Personal</div>
                <div class="row">
                  <div class="col col-lg-3">
                    <div class="card-profile-image">
                      <img
                        v-lazy="'https://project-portf.s3.us-east-2.amazonaws.com/assets/brad_painte.jpg'"
                      />
                    </div>
                  </div>
                  <div class="col ml-5 my-5 border-left">
                    <h3>Bradley Sosnowski</h3>
                    <div class="h6 font-weight-300">Raleigh, NC</div>
                    <h5 class="mt-4 text-uppercase">problem solver</h5>
                    <p
                      class="text-left"
                    >I am a DESIGN thinker. I embrace the wonder, I relish the opportunity to delve deep, dive back and find the unseen solution. This is applied to my way of living when at work, home or play.</p><p>I have had the pleasure of working with some amazing teams transforming experiences for thousands of users plus creating a sustainable process of design/development for application scalability. Where design meets usability is where I live; building bridges between functional and the implausible.</p>
                    <div class="row justify-content-end">
                      <div class="col-3">
                        <a v-b-toggle.collapse-1-inner class="btn button-outlined">toggle more</a>
                      </div>
                    </div>
                    <b-collapse id="collapse-1-inner" class="mt-2">
                      <div class="row mb-5">
                        <div class="col">
                          <h6 class="mt-4 text-uppercase">family life</h6>
                          <p class="text-left">Much of my inspiration from life originates from the time I spent with the amazing people in my Family. I have been married for over 11 years to my partner Sara. She and I have worked together on many projects and Pixelscut was a business that was birthed out of our love for making the most of of any experience. I have three beautiful and uniquely gifted children that have given me wonderful perspective. My extended family is very close even thought we live in other parts of the globe. I am blessed to have the people around me encouraging and pushing me to be the best I can be.</p>
                        </div>
                        <div class="col">
                          <div class="card-profile-image mt-5">
                            <img
                              v-lazy="'https://project-portf.s3.us-east-2.amazonaws.com/assets/fam.jpg'"
                              class="bounce rounded-circle"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row mb-5">
                        <div class="col">
                          <h6 class="mt-4 text-uppercase">hobbies</h6>
                          <p
                            class="text-left"
                          >No one can balance a healthy life sitting/standing at a computer all day. I keep my spirit,hands and mind coordinated through many hobbies. I love to tend the earth through gardening, landscape design and creation. You will tend to see me working on many different home projects including but not limited to interior renovations, Ford Bronco rebuild and woodworking.</p>
                        </div>
                        <div class="col">
                          <div class="card-profile-image">
                            <img
                              v-lazy="'https://project-portf.s3.us-east-2.amazonaws.com/assets/hobbies.jpg'"
                              class="bounce rounded-circle"
                            />
                          </div>
                        </div>
                      </div>
                    </b-collapse>
                  </div>
                </div>
              </tab-pane>

              <tab-pane id="work">
                <div slot="title">Work</div>
                <div class="row">
                  <div class="col">
                    <carousel-tabs :tabs="tabsObj"></carousel-tabs>
                  </div>
                </div>
              </tab-pane>

              <tab-pane id="relationship">
                <div slot="title">History</div>
                <div class="row">
                  <div class="col ml-5 my-5 border-right">
                    <h3>History</h3>
                    <div class="h6 mt-4">Digital Creative Solutions Expert</div>
                    <p>I started developing in html in 2005 with creating a website for family and friends to keep track of my 2 year mission to Lima, Peru</p>
                    <p>After returning to the states I had a brief one year engagement working with many different construction vendors. I organized newly constructed homes being completed and delivered to their new residents. I gained communicational and organizational project management experience in this possition. This combined with the 10 years I worked as a Sous chef really helped my cultural outlook of the work place.</p>
                    <p>I soon learned Flash animation and started learning all I could about website development and maintenance. I have had my hands in over a hundred applications that have spanned to small mom and pop shops to billion dollar banking tools. I love coming together with open and brilliant minds to discover solution to complex and the simple problems.</p>
                  </div>
                  <div class="col">
                    <img v-lazy="'https://project-portf.s3.us-east-2.amazonaws.com/assets/brad.jpg'"/>
                  </div>
                </div>
              </tab-pane>
            </card>
          </tabs>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import BListGroup from "bootstrap-vue";
import BListGroupItem from "bootstrap-vue";
import CarouselTabs from "@/components/Carousel/CarouselTabs.vue";
   import tabsObj from '@/data/carouselTabs.js';
export default {
  name: "landing",
  data() {
    return {
      tabsObj: tabsObj
    };
  },
  components: {
    Tabs,
    TabPane,
    BListGroup,
    BListGroupItem,
    CarouselTabs
  }
};
</script>
