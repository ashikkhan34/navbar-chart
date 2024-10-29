

const Link = ({route}) => {
    return (
        
            <li className="mr-10 hover:bg-blue-400 px-5" ><a href={route.path}>{route.name}</a></li>
       
    );
};

export default Link;