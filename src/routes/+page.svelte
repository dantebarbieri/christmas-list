<script lang="ts">
	import ListCard from './ListCard.svelte';

	const lists: { name: string; items: string[] }[] = [
		{ name: 'Dante', items: ['Earbuds', 'Speakers', 'Slippers', 'Pajamas'] },
		{
			name: 'Anjali',
			items: [
				'Extremely fine point “sharpies” for art (black)',
				'Wax Seal Kit',
				'High Quality Plant Lights',
				'Ranavat Serum',
				'Allbirds wool slippers',
				'Pie Silpat'
			]
		},
		{
			name: 'Erik',
			items: ['Headphones', 'Monitor']
		},
		{
			name: 'Kathy',
			items: [
				'Disc golf shirt',
				'Family Face Off Game',
				'Christmas Cracker Puzzle',
				'Ransom Notes Game'
			]
		},
		{
			name: 'Mark',
			items: [
				'Engineering in Plain Sight',
				"Steve Kenny's poetry book",
				'Yukata',
				'Big Jerm Floral shirt',
				'SD Case'
			]
		},
        {
            name: 'Greedy',
            items: [
                'Money',
                'Cars',
                'Planes',
                'Automobiles',
                'Submersibles',
                'The World',
                'Energy',
                'Light',
                'Magic',
                'The Universe'
            ]
        },
        {
            name: 'Mariah Carey',
            items: [
                'You'
            ]
        }
	];
</script>

<h1>Christmas Lists</h1>
<p>
	Select someone's christmas list in order to shop for them. Please note that your list can be found
	at <a href="/list">List</a>.
</p>
<div>
    {#each lists as list}
        <ListCard {...list} />
    {/each}
</div>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
    }
</style>
