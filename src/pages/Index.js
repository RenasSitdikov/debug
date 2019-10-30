import React from 'react';
import styled from 'styled-components';

import List from '../components/List';

const Wrapper = styled.div`
    width: 100%;
`;

const Centred = styled.div`
    max-width: 700px;
    margin: 0 auto;
`;

const Index = () => (
    <Wrapper>
        <Centred>
            <List/>
        </Centred>
    </Wrapper>
);

export default Index;
