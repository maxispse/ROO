import { ref } from "vue";

export const posts = ref([]);

export function addPost(title, text) {
    posts.value.push({
        text,
        title,
        id: Math.random().toString(36).substring(2),
        createdAt: new Date().toISOString()
    });
}
export function onImageSelect(e) {
    const file = e.target.files[0];
    if (file) {
        this.selectedImage = URL.createObjectURL(file);
    }
}