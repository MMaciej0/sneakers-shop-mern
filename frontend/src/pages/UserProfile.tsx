import { useState } from 'react';
import SingleSelectionButtonGroup from '../components/SingleSelectionButtonGroup';
import UpdateUserProfileForm from '../components/forms/UpdateUserProfileForm';
import UpdateUserShippingAddressForm from '../components/forms/UpdateUserShippingAddressForm';
import UserOrderHistoryList from '../components/UserOrderHistoryList';

const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState('Profile');

  return (
    <div className="max-w-contentContainer px-4 mx-auto py-10">
      <div className="flex w-full space-x-4">
        <SingleSelectionButtonGroup
          selectedButton={selectedTab}
          selectedButtonChange={setSelectedTab}
          buttonsLabels={['Profile', 'Order History']}
        />
      </div>
      <div>
        {selectedTab === 'Profile' && (
          <>
            <UpdateUserProfileForm />
            <UpdateUserShippingAddressForm />
          </>
        )}
        {selectedTab === 'Order History' && <UserOrderHistoryList />}
      </div>
    </div>
  );
};

export default UserProfile;
