import gql from "graphql-tag"
import graphqlClient from '../apollo'

class UserProvider {
    auth(username, password) {
        return graphqlClient.mutate({
            mutation: gql`
                mutation ($username:String!, $password:String!){
                    auth(username:$username, password:$password){
                        token
                        user{
                            id
                            username
                        }
                    }
                }
            `,
            variables: {
                username,
                password
            }
        })
    }
}

export default new UserProvider()