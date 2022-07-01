import {FC, memo, useCallback, useEffect} from "react";
import {
    Center,
    Spinner,
    useDisclosure,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import {UserCard} from "../organisms/user/UserCard";
import {useAllUsers} from "../../hooks/useAllUsers";
import {UserDetailModal} from "../organisms/user/UserDetailModal";


export const UserManagement: FC = memo(() => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {getUsers, loading, users} = useAllUsers()

    useEffect(() => getUsers(), [])

    const onClickUser = useCallback(() => onOpen(), []);

    // @ts-ignore
    return (
        <>
            {loading ? (
                <Center h={"100vh"}>
                    <Spinner/>
                </Center>
            ) : (
                <Wrap p={{base: 4, md: 10}}>
                    {users.map((user) => (
                        <WrapItem key={user.id} mx={"auto"}>
                            <UserCard imageUrl={"https://source.unsplash.com/random"} userName={user.username}
                                      fullName={user.name} onClick={onClickUser}
                            />
                        </WrapItem>
                    ))}
                </Wrap>
            )}
            <UserDetailModal isOpen={isOpen} onClose={onClose}/>
        </>
    )
});
