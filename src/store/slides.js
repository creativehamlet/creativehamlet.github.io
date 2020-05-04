import logError from '../logging';
const AWS = require('aws-sdk');
const Minio = require('minio')

const slideStore = {
    state: {
        slides: [],
        project: '2-abrigo',
        category: 'all',
        isLoading: true,
    },
    mutations: {
        addSlide (state, val) {
            if(!state.slides) {
                Vue.set(state, 'slides', []);
            }
            state.slides.push(val);
        },
        setSlides (state, val) {
            state.slides = val;
        },
        setProject (state, val) {
            state.project = val;
        },
        setCategory (state, val) {
            state.category = val;
        },
        setIsLoading (state, val) {
            state.isLoading = val;
        },
    },
    actions: {
        setIsLoading(context, loading) {
            context.commit('setIsLoading', loading);
        },
        
        async fetchSlides({ commit, dispatch }) {
            const minioClient = new Minio.Client({

                endPoint: process.env.VUE_APP_MINIO_ENDPOINT,
                port: parseInt(process.env.VUE_APP_MINIO_PORT),
                useSSL: false,
                accessKey: process.env.VUE_APP_MINIO_ACCESS_KEY,
                secretKey: process.env.VUE_APP_MINIO_SECRET_KEY
            });
            const bucket = process.env.VUE_APP_MINIO_BUCKET;
            let stream = minioClient.listObjectsV2(bucket, '', true)
            stream.on('data', async function (obj) { 
                let url = await minioClient.presignedGetObject(bucket, obj.name)
                obj.url = url;
                commit('addSlide', obj); 
            });

        },
        setProject(context, project) {
            context.commit('setProject', project);
        },
        setCategory(context, category) {
            context.commit('setCategory', category);
        },
        async purgeEmptySlides(context) {
            const result = await context.state.slides.filter(obj => obj.Size > 0);
            context.commit('setSlides', result);
        }
    },
    getters: { 
        slides(state) {
            let slides = [];
            state.slides.forEach(element => {

                // Split the Key (path) and get the object type
                const split = element.name.split('/');
                const extension = element.name.split('.')[1];
                const type = (extension === 'png' || extension === 'jpg') ? 'img' : 'video';

                // Push the element to the array if it's the correct project, and not empty (folder)
                if(split.indexOf(state.project) > -1 && element.size !== 0) {
                    slides.push({
                        url: element.url,
                        type: type,
                    });
                }
            });
            return slides;
        },
        category: state => state.category,
        project: state => state.project,
        isLoading: state => state.isLoading,
    }
}

export default slideStore;
