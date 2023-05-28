import { useState } from 'react';
import SingleSelectionButtonGroup from '../components/SingleSelectionButtonGroup';
import UpdateUserProfileForm from '../components/Forms/updateUserProfileForm';
import UpdateUserShippingAddressForm from '../components/Forms/UpdateUserShippingAddressForm';

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
          <div>
            <UpdateUserProfileForm />
            <UpdateUserShippingAddressForm />
          </div>
        )}
        {selectedTab === 'Order History' && <div>Order History</div>}
      </div>
    </div>
  );
};

export default UserProfile;
