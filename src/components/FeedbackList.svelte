<script lang="ts">
    import type { Feedback } from "../interfaces/Feedback";
    import FeedbackItem from "./FeedbackItem.svelte";

    export let feedback: Feedback[] = [];
</script>

{#each feedback as fb (fb.id)}
    <FeedbackItem item={fb} on:delete-feedback />
{/each}