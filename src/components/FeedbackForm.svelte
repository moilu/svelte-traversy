<script lang="ts">
    import { v4 as uuidv4 } from 'uuid';
    import Button from "./Button.svelte";
    import Card from "./Card.svelte";
    import RatingSelect from "./RatingSelect.svelte";

    let rating: number = 10;
    let text: any;
    let btnDisabled: boolean = true;
    let min: number = 10;
    let message: string | null;

    const handleInput = (text): void => {
        if(text.length <= min) {
            message = `El mensaje debe ser de al menos ${min} caracteres.`;
            btnDisabled = true;
        } else {
            message = null;
            btnDisabled = false;
        }
    }

    const handleSelect = (event) => rating = event.detail;

    const handleSubmit = () => {
        if (text.lenght >= min) {
            const newFeedback = {
                id: uuidv4(),
                text,
                rating: +rating
            }
            console.log(newFeedback);
        }
    }

</script>
<Card>
    <header>
        <h2>¿Como calificarías nuestro servicio?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect on:rating-select={handleSelect} />
        <div class="input-group">
            <input type="text" on:input={handleInput} bind:value={text} placeholder="¡Dinos algo!">
            <Button disabled={btnDisabled}>Enviar</Button>
        </div>
        {#if message}
            <div class="message">{message}</div>
        {/if}
    </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }
  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  .message{
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>