<script lang="ts">
    import Card from "./Card.svelte";
    import type { Feedback } from "../interfaces/Feedback";
    import { FeedbackStore } from "../stores";
    
    export let item: Feedback;

    function handleDelete(id: number): void {
        FeedbackStore.update((currentStore)=> {
            return currentStore.filter((item)=> item.id != id);
        });
    }
</script>

<Card>
    <div class="num-display">
        {item.rating}
    </div>
    <button class="close" on:click={()=> handleDelete(item.id)}>
        X
    </button>
    <p class="text-display">
        {item.text}
    </p>
</Card>

<style>
    .num-display {
        position: absolute;
        top: -10px;
        left: -10px;
        width: 50px;
        height: 50px;
        background: #ff6a95;
        color: #fff;
        border: 1px #eee solid;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        font-size: 19px;
    }
    .close {
        background: none;
        border: none;
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
    }
</style>