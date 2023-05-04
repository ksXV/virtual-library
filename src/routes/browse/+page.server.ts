import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

type BookDataArr = {
  results: Book[]
}

type Book = {
  book_details: BookData[]
}
type BookData = {
  title: string
  description: string
  contributor: string
  author: string
  contributor_note: ''
  price: string
  age_group: string
  publisher: string
  primary_isbn13: string
  primary_isbn10: string
}

export const load = (async ({ fetch }) => {
  try {
    const apiKey = 'pVpaQuUAHZMhexyoyLwyGOMC0Eybv1wL'
    const response = await fetch(
      'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' +
      apiKey,
      { method: 'get' }
    )

    const data = (await response.json()) as BookDataArr
    return data
  } catch (err) {
    throw error(500)
  }
}) satisfies PageServerLoad
