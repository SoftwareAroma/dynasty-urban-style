import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND_API_URL,
    cache: new InMemoryCache(),
});

export const getApolloClient = () => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: process.env.NEXT_PUBLIC_BACKEND_API_URL,
            fetch,
        }),
    });
};