import React from 'react';

const CreateHobbyGroup = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const hobby = form.hobby.value;
        const description = form.description.value;
        const meeting = form.meeting.value;
        const members = form.members.value;
        const start = form.start.value;
        const lastDate = form.lastDate.value;
        const photo = form.photo.value;
        const user = form.user.value;
        const email = form.email.value;

        const groupDetails = { name, hobby, description, meeting, members, start, lastDate, photo, user, email }

        console.log(groupDetails)

    }




    return (
        <div className='my-16'>
            <h3 className='text-center font-bold text-3xl'>Complete the form to start your hobby group</h3>
            <form className='border p-5 my-10' onSubmit={handleSubmit}>

                <p className="label mb-2">Enter Group Name</p>
                <input type="text" name='name' placeholder="Group Name" className="input w-full mb-2 " />
                <br />

                <p className="label mb-2">Hobby Category</p>
                {/* <input type="text" placeholder="Type here" className="input w-full " /> */}

                <select id="hobby" name="hobby" className="select select-bordered w-full mb-2">
                    <option value="">-- Choose one --</option>
                    <option value="hiking">Hiking</option>
                    <option value="painting">Painting</option>
                    <option value="photography">Photography</option>
                    <option value="VideoGaming">Video Gaming</option>
                    <option value="Fishing">Fishing</option>
                    <option value="Running">Running</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Reading">Reading</option>
                    <option value="Writing">Writing </option>
                    <option value="Eating">Eating </option>
                </select>

                <br />

                <p className="label mb-2">Description</p>
                <input type="text" name='description' placeholder="Description" className="input w-full mb-2 h-12" />
                <br />

                <p className="label mb-2">Meeting Location</p>
                <input type="text" name='meeting' placeholder="Meeting Location" className="input w-full mb-2 " />
                <br />

                <p className="label mb-2">Max Members</p>
                <input type="text" name='members' placeholder="Max Members" className="input w-full mb-2 " />
                <br />

                <p className="label mb-2">Starting Date</p>
                <input type="text" name='start' placeholder="Starting Date" className="input w-full mb-2 " />
                <br />

                <p className="label mb-2">Last date of joining</p>
                <input type="text" name='lastDate' placeholder="Last date of joining" className="input w-full mb-2 " />
                <br />

                <p className="label mb-2">Group Logo URL</p>
                <input type="text" name='photo' placeholder="URL" className="input w-full mb-2 " />
                <br />

                <p className="label mb-2">User Name</p>
                <input type="text" name='user' placeholder="User Name" className="input w-full mb-2 " />
                <br />

                <p className="label mb-2">User Email</p>
                <input type="text" name='email' placeholder="User Email" className="input w-full mb-2 " />
                <br />

                <button className='btn btn-primary w-full mt-3' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateHobbyGroup;