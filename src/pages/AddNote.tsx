import React from "react";

const AddNote: React.FC = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="bg-primary h-fit p-10 w-[500px] absolute left-[50%] translate-x-[-50%] top-[20%]
            rounded-2xl shadow-xl">
            <div className="flex flex-col gap-2">
                <label className="text-xl" htmlFor="title">Title: </label>
                <input className="w-[300px] rounded-xl outline-none px-3 py-1" type="text" id="title" />
            </div>

            <div className="flex flex-col gap-2 my-10">
                <label className="text-xl" htmlFor="content">Content: </label>
                <textarea className="w-[300px] rounded-xl outline-none px-3 py-5" id="content" />
            </div>

            <button className="absolute right-12 bg-blue-500 p-2 bottom-4 rounded-lg drop-shadow-2xl">Save</button>
        </form>
    )
}


export default AddNote;