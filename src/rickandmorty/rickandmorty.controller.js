import React from "react";
import Style from './rickandmorty.view';
import axios from "axios";


const CharacterAPI = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character/",
    headers: {
        Accept: 'application/json', 'Content-Type': 'application/json'
    }
});

export default class Character extends React.Component{
    constructor(props) {
        super(props);
        this.pageLoad = 1;
        this.loadPage();
    }

    state = {
        pagination: this.props.pagination,
        users: [],
    }

    loadPage = async() =>{
        const response = await CharacterAPI.get(`/?page=${this.pageLoad}`);
        this.setState({
            users: response.data.results,
        })
    }

    prevPage = () => {
        this.pageLoad--;
        this.loadPage();
    }

    nextPage = () => {
        this.pageLoad++;
        this.loadPage();
    }

    render(){
            return (
                <Style.Wrapper>
                    <Style.UserInfo>
                        { this.state.users.map((user, index) => {
                                if (index < this.state.pagination) {
                                    return (
                                        <Style.Card>
                                            <img src={user.image} alt={user.name}/>
                                            <Style.Name>{user.name}</Style.Name>
                                        </Style.Card>
                                    )
                                }
                            })
                        }
                    </Style.UserInfo>
                    <Style.ButtonDiv>
                        <Style.Button onClick={this.prevPage} disabled={this.pageLoad === 1}>PREV</Style.Button>
                        <Style.Button onClick={this.nextPage} disabled={this.pageLoad === 30}>NEXT</Style.Button>
                    </Style.ButtonDiv>
                </Style.Wrapper>
            )
        }
}