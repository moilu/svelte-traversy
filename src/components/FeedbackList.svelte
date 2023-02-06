<script lang="ts">
    import { scale, fade } from "svelte/transition";
    import { FeedbackStore } from "../stores";
    // import type { Feedback } from "../interfaces/Feedback";
    import FeedbackItem from "./FeedbackItem.svelte";
    // import { onDestroy, onMount } from "svelte/types/runtime/internal/lifecycle";

    // let feedback: Feedback[] = [];
    // const unsubscribe = FeedbackStore.subscribe((data)=> feedback = data);

    // onMount(()=> {

    // });
    // onDestroy(()=> {
    //     unsubscribe();
    // });
</script>

{#each $FeedbackStore as fb (fb.id)}
    <div in:scale out:fade="{{duration: 500 }}">
        <FeedbackItem item={fb} />
    </div>
{/each}