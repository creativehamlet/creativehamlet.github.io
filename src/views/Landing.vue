<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-secondary shape-skew">
        <vue-particles
          color="#bf571b"
          :id="id"
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
            <card shadow class="card-profile">
              <tab-pane>
                <div slot="title">Personal</div>
                <div class="row">
                  <div class="col col-lg-3">
                    <div class="card-profile-image">
                      <img
                        v-lazy="'https://project-portf.s3.us-east-2.amazonaws.com/assets/brad_painte.jpg'"
                      />
                    </div>
                  </div>
                  <div class="col ml-5 border-left">
                    <h3>Bradley Sosnowski</h3>
                    <div class="h6 font-weight-300">Raleigh, NC</div>
                    <h5 class="mt-4 text-uppercase">problem solver</h5>
                    <p
                      class="text-left"
                    >I am a DESIGN thinker. I embrace the wonder, I relish the opportunity to delve deep, dive back and find the unseen solution. This is applied to my way of living when at work, home or play.</p>
                    <div class="row justify-content-end">
                      <div class="col-3">
                        <a v-b-toggle.collapse-1-inner class="btn button-outlined">toggle more</a>
                      </div>
                    </div>
                    <b-collapse id="collapse-1-inner" class="mt-2">
                      <div class="row mb-5">
                        <div class="col">
                          <h6 class="mt-4 text-uppercase">family life</h6>
                          <p class="text-left">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                        </div>
                        <div class="col">
                          <div class="card-profile-image">
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
                          >An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
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

              <tab-pane>
                <div slot="title">Work</div>
                <div class="row">
                  <div class="col">
                    <carousel-tabs :tabs="tabsObj"></carousel-tabs>
                  </div>
                </div>
              </tab-pane>

              <tab-pane>
                <div slot="title">Relationship</div>
                <div class="row">
                  <div class="col ml-5 border-left">
                    <h3>History</h3>
                    <div class="h6 mt-4">Digital Creative Solutions Expert</div>
                  </div>
                  <div class="col">
                    <div class="card-profile-image">
                      <img
                        v-lazy="'https://project-portf.s3.us-east-2.amazonaws.com/assets/brad.jpg'"
                      />
                    </div>
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
      tabsObj: tabsObj,
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
