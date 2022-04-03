import { Center, Heading, Container, Box, Button, Tooltip, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useLogoutUserMutation } from '../../../queries/users/hooks';

const SettingsForm = () => {
    const [darkMode, setDarkMode] = useState(false);

    const { mutate: logout } = useLogoutUserMutation()

    return (<>
        <Center>
            <Heading p="8">Settings</Heading>
        </Center>
        <Container>
            <Box p="4">
                <Tooltip label="Log out of Calculo">
                    <Button onClick={() => logout()}>Logout</Button>
                </Tooltip>
            </Box>
            <Box p="4">
                <Tooltip label="Toggle dark mode">
                    <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light" : "Dark"} mode {darkMode ? <Icon as={FiSun} /> :<Icon as={FiMoon} />}</Button>
                </Tooltip>
            </Box>
        </Container>
    </>
    )
};

export default SettingsForm;
