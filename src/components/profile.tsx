import { useTranslations } from "next-intl";


const Profile = () => {
    return (
        <div
            id="profile"
            className="lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 pt-20"
        >
            <img
                src="/profile.png"
                alt="Profile Picture"
                className="rounded-full w-100 h-100 object-cover mx-auto"
            />
        </div>
    );
}

export default Profile;