import url from "./url"
import {redirect} from "react-router-dom"

// Create Action for Creating 
export const createAction = async({request}) => {
    // parse out the form data
    const formData = await request.formData();

    // construct the body for our api call
    const newGarage = {
        make: formData.get("make"),
        model: formData.get("model"),
        year: formData.get("year"),
        grade: formData.get("grade")
    }

    // make a request to create a todo
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGarage)
    })

    // redirect to the index page
    return redirect("/")
}

// Update Action for Updating 
export const updateAction = async({request, params}) => {
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    // construct the updated 
    const updatedGarage = {
        make: formData.get("make"),
        model: formData.get("model"),
        year: formData.get("year"),
        grade: formData.get("grade")
    }

    // make a request to update
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedGarage)
    })

    // redirect to the show page
    return redirect(`/post/${id}`)
}

// Delete Action for Deleting 
export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id

    // make a request to delete a todo
    await fetch(url + id, {
        method: "delete"
    })

    // redirect to the index page
    return redirect("/")
}