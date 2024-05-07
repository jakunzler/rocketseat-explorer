import { RiShutDownLine} from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { Container, Profile, Logout } from "./styles";
import { api } from "../../services/api";
import emptyImage from "../../assets/empty-profile.png";

export function Header() {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : emptyImage;


    return(
        <Container>
            <Profile to="/profile">
                <img 
                src={avatarUrl} 
                alt={`Foto do usuário ${user.name}`}
            />

                <div>
                    <span>Bem vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={ signOut }>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}