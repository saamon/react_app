import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomeRoutes } from "./HomeRoutes";
import {Login} from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route
                path="/home"
                render={({ match: { url } }) => (
                    <Switch>
                        {HomeRoutes.map(route => (
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={`${url}${route.path}`}
                            >
                                {route.children}
                            </Route>
                        ))}
                    </Switch>
                )}
            />
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    );
};
