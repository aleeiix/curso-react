import React from "react";
import { Link } from "react-router-dom";
import {
    VIEW_ONE_PATH,
    VIEW_TWO_PATH,
    VIEW_THREE_PATH,
    PRIVATE_VIEW_PATH
} from "../config/paths";

export default function Menu() {
    return (
        <div>
            <p>
                <Link to={VIEW_ONE_PATH}>View One</Link>
            </p>
            <p>
                <Link to={VIEW_TWO_PATH}>View Two</Link>
            </p>
            <p>
                <Link to={VIEW_THREE_PATH}>View Three</Link>
            </p>
            <p>
                <Link to={PRIVATE_VIEW_PATH}>Private view</Link>
            </p>
        </div>
    );
}
