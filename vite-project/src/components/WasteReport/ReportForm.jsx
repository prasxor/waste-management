import React, { useState } from "react";

const ReportForm = () => {
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Report submitted!");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Submit a Waste Report</h2>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the waste issue..."
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReportForm;
