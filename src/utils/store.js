const cards = [
    {
        id: "card-1",
        title: "primera card",
    },
    {
        id: "card-2",
        title: "mkfmf",
    },
    {
        id:"card-3",
        title: "fkmfkldsmf",
    },

];

const data={
    lists:{
        "list-1":{
            id: "list-1",
            title:"Inicio",
            cards,
        },
        "list-2":{
            id: "list-1",
            title: "en proceso",
            cards:[]
        },
    },
    listIds:["list-1","list-2"],
};


export default data;