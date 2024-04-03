import SkillProps from "./skills.types";
import React, { useState } from "react";


export const Skills = (props: SkillProps) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const { skills } = props;
    return (
        <>
            <ul>
                {
                    skills.map((skill) => {
                        return <li>{skill}</li>
                    })
                }

            </ul>
            <div>
                {
                    loggedIn ? (
                        <button>Start learning</button>
                    ) : (
                        <button onClick={() => setLoggedIn(true)}>Login</button>
                    )
                }
            </div>

        </>

    )

}