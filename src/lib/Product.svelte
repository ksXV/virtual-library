<script lang="ts">
  export let name: string
  export let author: string
</script>

<a class="place-self-center" href="books/example.pdf">
  <div class="cursor-pointer w-100">
    <img
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png"
      class="aspect-[3/4] object-cover 2xl:w-[170px] rounded w-[165px]"
      alt="book"
    />
    <div class="flex flex-col justify-between items-center py-1">
      <h3
        class="text-center font-medium text-ellipsis whitespace-nowrap overflow-hidden w-40"
      >
        {name}
      </h3>
      <p class="font-thin text-xs">De: {author}</p>
    </div>
  </div>
</a>
