<script lang="ts">
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedBackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";

  function deleteFeedback(event: CustomEvent) {
    const itemId = event.detail;
    feedback = feedback.filter((item)=> item.id != itemId);
  }

  let feedback = [
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo commodi iste quae aspernatur, omnis cupiditate quod quidem ex atque labore quasi voluptatem accusantium amet nesciunt facere porro animi iure earum.'
    },
    {
      id: 2,
      rating: 8,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo commodi iste quae aspernatur, omnis cupiditate quod quidem ex atque labore quasi voluptatem accusantium amet nesciunt facere porro animi iure earum.'
    },
    {
      id: 3,
      rating: 9,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo commodi iste quae aspernatur, omnis cupiditate quod quidem ex atque labore quasi voluptatem accusantium amet nesciunt facere porro animi iure earum.'
    }
  ];

  $: count = feedback.length;
  $: average = feedback.reduce((a, {rating})=> a + rating, 0) / count;
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats {count} {average}/>
  <FeedBackList {feedback} on:delete-feedback={deleteFeedback}/>
</main>