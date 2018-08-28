import {extendObservable, useStrict, observable, action, computed, reaction} from 'mobx';
import axios from './axios_csrf'

export default class RootStore {
    constructor() {
        extendObservable(this, {
            loading: true,
            postForm: {name: '', description: ''},
            posts: [],
            filteredPosts: [],
            filterString: '',

        });

        this.fetchPosts();
    }


    fetchPosts() {
        this.loading = true;

        axios.get('/posts.json', {})
            .then(response => {
                this.posts = response.data;
                this.loading = false;
                this.filterPosts()
            })
            .catch(error => {
                console.log(error);
            });
    }


    createPost() {
        const post = observable({id: -1, ...this.postForm});
        this.filteredPosts.push(post);
        this.posts.push(post);

        this.resetPostForm();

        axios.post('/posts.json', {post: post})
            .then(response => {
                post.id = response.data.id;

            })
            .catch(error => {
                console.log(error);
                this.posts.remove(post)
            })
    }


    deletePost(post) {
        try {
            axios.delete(`/posts/${post.id}.json`)
                .then(response => {
                    // console.log(response.data);
                    this.posts.remove(post);
                    this.filterPosts()
                })
                .catch(error => {
                    console.log(error);
                })
        }
        catch (e) {
            console.error(e);
        }

    }


    resetPostForm() {
        const form = this.postForm;
        form.name = '';
        form.description = '';
    }


    filterPosts() {
        if (this.filterString) {
            this.filteredPosts = this.posts.filter(post =>
                post.name.toLowerCase().includes(this.filterString.toLowerCase()))
        } else {
            this.filteredPosts = this.posts.slice();
        }
    }


    isPersisted(post) {
        return post.id !== -1
    }

}
