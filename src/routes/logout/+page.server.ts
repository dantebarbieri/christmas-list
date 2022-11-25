import { redirect } from "@sveltejs/kit"

export const load = ( e: any ) => {
    console.log(e)

    throw redirect(303, '/')
}