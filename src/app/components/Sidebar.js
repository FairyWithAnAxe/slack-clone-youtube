import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React from 'react'
import styled from "styled-components";

function Sidebar() {
    return (
        <SidebarContainer>
                <SidebarHeader>
                    <SidebarInfo>
                        <h2>FairyWithAnAxe</h2>
                        <h3>
                            <FiberManualRecordIcon/>
                            FairyWithAnAxe
                        </h3>
                    </SidebarInfo>
                </SidebarHeader>
        </SidebarContainer>
            
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
color: #fff;
background-color: var(--slack-color);
flex:0.3;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 60px;
`;

const SidebarHeader = styled.div``;

const SidebarInfo = styled.div``;
