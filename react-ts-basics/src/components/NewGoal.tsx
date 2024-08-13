import {type FormEvent, useRef} from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}


export default function NewGoal({onAddGoal}: NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null); // Null = sementara nggak ada value, makannya gak pakai undefined

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault(); // Development only karena nggak ada backend yang handle

        // new FormData(event.currentTarget);
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label> Your Goal</label>
                <input id="goal" type="text" ref={goal}/>
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input id="summary" type="text" ref={summary}/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );

}