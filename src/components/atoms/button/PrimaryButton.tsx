import {FC, ReactNode} from "react";
import {Button} from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    isFullWidth?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    onClick: () => void;
};

export const PrimaryButton: FC<Props> = props => {
    const {children = false, isLoading = false, disabled = false, onClick} = props;

    return (
        <Button
            bg="teal.400"
            color="white"
            disabled={disabled}
            _hover={{opacity: 0.8}}
            isLoading={isLoading}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
