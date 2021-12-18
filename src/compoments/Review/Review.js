

import { useForm } from "react-hook-form";
const Review = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();






    const onSubmit = data => {
        fetch("https://infinite-earth-23575.herokuapp.com/review", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Review successfully');
                    reset()
                }
            })

        console.log(data)

    };
    return (
        <div>
            <form className="booking" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Your Name"  {...register("name")} />
                <input type="text" placeholder="Your Comment"  {...register("review")} />
                <input type="number" placeholder="Rate Our Watches out of 5"  {...register("rating")} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="btn btn-primary" type="submit" />
            </form>

        </div>
    );
};

export default Review;