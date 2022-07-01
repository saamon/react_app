import {FC} from "react";
import {
    FormControl, FormLabel,
    Input,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
} from "@chakra-ui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const UserDetailModal: FC<Props> = props => {
    const {isOpen, onClose} = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset={"slideInBottom"}>
            <ModalOverlay/>
            <ModalContent pb={6}>
                <ModalHeader>ユーザー詳細</ModalHeader>
                <ModalCloseButton/>
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input value={"kent"} isReadOnly/>
                        </FormControl> <FormControl>
                        <FormLabel>フルネーム</FormLabel>
                        <Input value={"Suzuki kent"} isReadOnly/>
                    </FormControl> <FormControl>
                        <FormLabel>Mail</FormLabel>
                        <Input value={"1234@gmail.com"} isReadOnly/>
                    </FormControl> <FormControl>
                        <FormLabel>TEL</FormLabel>
                        <Input value={"090-0000-0000"} isReadOnly/>
                    </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
