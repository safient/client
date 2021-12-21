import React from 'react';
import { StatsCard, Text, Input } from 'components/primitive';
import styled from 'styled-components';

const AccountContainer = styled.section`
  width: 100%;

  padding-left: 7rem;
  top: 10%;
  left: 17%;
  bottom: 0;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const AccountInfoContainer = styled.section``;

const AccountInfo = styled.section`
  margin-top: 2rem;
  padding: 4rem;
  background: white;
  width: 987px;
`;

const StatsCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AccountSettingsContainer = styled.section`
  margin-top: 5rem;
`;
const Card = styled.section`
  margin-top: 2rem;
  padding: 4rem;
  background: white;
  width: 987px;
`;

const NotificationContainer = styled.section`
  display: flex;
  align-item: center;
  margin-top: 6rem;
  gap: 15.2rem;
`;

const DefaultSettingsContainer = styled.section`
  margin-top: 6rem;
`;

export const ProfileScreen = () => {
  return (
    <AccountContainer>
      {/* Account */}
      <AccountInfoContainer>
        <Text variant='contentHeader' text='Profile' left />
        <AccountInfo>
          <div></div>
          <StatsCardContainer>
            <StatsCard
              heading={{ text: 'Safes you are Guarding' }}
              count={{ text: '02' }}
              iconName={{ name: 'guarding' }}
            />
            <StatsCard heading={{ text: 'Safes Created' }} count={{ text: '02' }} iconName={{ name: 'safes' }} />
            <StatsCard
              heading={{ text: 'Inherited Safes' }}
              count={{ text: '02' }}
              iconName={{ name: 'inherit' }}
            />{' '}
          </StatsCardContainer>
        </AccountInfo>
      </AccountInfoContainer>

      {/* Setting */}
      <AccountSettingsContainer>
        <Text variant='contentHeader' text='Settings' left />
        <Card>
          <Text variant='contentHeader' text='Notifications' left />

          <NotificationContainer>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>
              <Text variant='content' text='In app notifications ' left />
              <input type='checkbox' name='' id='' />
            </span>

            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>
              <Text variant='content' text='Email notifications' left />
              <input type='checkbox' name='' id='' />
            </span>
          </NotificationContainer>
        </Card>
      </AccountSettingsContainer>
      {/* degault settings */}
      <DefaultSettingsContainer>
        <Card>
          <Text variant='contentHeader' text='Default safe configs' left />

          <NotificationContainer>
            <Input type='text' label='Beneficiary' placeholder='DID of the beneficiary' />
          </NotificationContainer>
        </Card>
      </DefaultSettingsContainer>
    </AccountContainer>
  );
};
