<script>
  import data from "../data.json";
</script>

<main>
  <div
    class=" w-full min-h-screen flex flex-col font-hanken md:flex-row md:justify-center md:items-center md:px-3"
  >
    <div class=" w-full min-h-screen flex flex-col  md:flex-row md:min-h-[600px] justify-center items-center  md:bg-white md:shadow-2xl rounded-[35px] md:max-w-[900px]"> 
      <div
        class="w-full flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-t from-lightRoyalBlue to-lightSlateBlue text-white rounded-b-[35px] md:rounded-t-[35px] py-3 md:min-h-[600px]"
      >
        <h1 class=" font-hanken text-paragraph mb-5  opacity-80 md:mb-10">Your Result</h1>
        <div
          class=" w-[150px] h-[150px] md:min-w-[250px] md:min-h-[250px] rounded-full flex flex-col bg-gradient-to-b from-violetBlue to-persianBlue text-white justify-center items-center mb-5 md:mb-10"
        >
          <h1 class=" font-bold text-6xl mb-2">76</h1>
          <p class=" text-[14px] opacity-70">of 100</p>
        </div>
        <h1 class=" text-2xl font-bold mb-2 md:mb-6">Great</h1>
        <p class=" opacity-70 w-[300px]">
          You have scored higher than 65% of the people who have taken these
          tests.
        </p>
      </div>

      <div
        class=" w-full flex-1 flex flex-col justify-center items-center bg-white p-5 md:p-8"
      >
        <h1
          class=" text-black self-start text-[20px] font-bold capitalize mb-4 md:mb-6"
        >
          summary
        </h1>
        {#each data as item}
          <div
            class={`${item.category} min-w-full bg-red-500 mb-4 py-3 md:py-4 rounded-lg flex justify-between items-center px-2`}
          >
            <div class=" flex">
              <img src={item.icon} alt="img" class=" mr-2 font-bold" />
              <p class=" font-bold">{item.category}</p>
            </div>
            <div class="flex">
              <span class=" font-extrabold text-darkGrayBlue"
                >{item.score}{" "} &nbsp;</span
              >
              <span class=" font-bold text-[#a7a7ac]">/ 100</span>
            </div>
          </div>
        {/each}
        <button
          class=" w-full capitalize text-paragraph font-bold text-white bg-darkGrayBlue py-3 rounded-3xl mt-3 md:mt-6"
          >Continue</button
        >
      </div>
    </div>
  </div>
</main>

<style>
  .Reaction {
    background: hsl(0, 100%, 67%, 0.05);
    color: hsl(0, 100%, 67%);
  }

  .Memory {
    background: hsl(39, 100%, 56%, 0.05);
    color: hsl(39, 100%, 56%);
  }

  .Verbal {
    background: hsl(166, 100%, 37%, 0.05);
    color: hsl(166, 100%, 37%);
  }

  .Visual {
    background: hsl(234, 85%, 45%, 0.05);
    color: hsl(234, 85%, 45%);
  }
</style>
