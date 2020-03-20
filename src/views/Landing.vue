<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>

        <section class="section section-skew">
            <div class="container container-lg">
                <div class="row">
                    <tabs>
                        <card shadow class="card-profile">
                            <tab-pane>
                                <div slot="title">
                                    Personal
                                </div>
                                <div class="col-lg-3 order-lg-2">
                                    <div class="card-profile-image">
                                        <img v-lazy="'https://project-portf.s3.us-east-2.amazonaws.com/assets/brad_painte.jpg'">
                                    </div>
                                </div>
                                <div class="text-center mt-5">
                                    <h3>Bradley Sosnowski
                                        <span class="font-weight-light">, 49</span>
                                    </h3>
                                    <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Raleigh, NC</div>
                                    <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Digital Creative Solutions Expert</div>
                                    <div><i class="ni education_hat mr-2"></i>UIOT</div>
                                </div>
                                <div class="mt-5 py-5 border-top">
                                    <div class="row">
                                        <div class="col"></div>
                                        <div class="col-lg-9">
                                            <p class="text-left">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                                            <a href="#">Show more</a>
                                        </div>
                                    </div>
                                </div>
                            </tab-pane>

                            <tab-pane>
                                <div slot="title">
                                    Work
                                </div>
                                <div class="col-lg-3 order-lg-2">
                                    <div class="card-profile-image">
                                        <a href="#">
                                            <img v-lazy="'img/theme/team-4-800x800.jpg'">
                                        </a>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-9">
                                            <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                                            <a href="#">Show more</a>
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
export default {
  name: "landing",
  data: function() {
    return {};
  },
  components: {
    Tabs,
    TabPane,
    BListGroup,
    BListGroupItem
  }
};
</script>
