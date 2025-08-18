import { VerifiedIcon } from "@/components/icon";
import Popover from "@/components/UI/Popover";
import { faker } from "@faker-js/faker";

export default function ProfileName({
  name,
  nickname,
}: {
  name: string;
  nickname: string;
}) {
  return (
    <Popover>
      <Popover.Trigger>
        <div className="flex items-start group flex-col">
          <div className="flex items-center gap-x-2">
            <span className="font-semibold group-hover:underline cursor-pointer">{name}</span>
            {faker.datatype.boolean() && (
              <VerifiedIcon className="text-accent-blue" width={16} />
            )}
          </div>
          <span className="text-xs text-betweet-secondary-text">
            @{nickname}
          </span>
        </div>
      </Popover.Trigger>
      <Popover.Body>
        <div className="w-95 p-4">
          {/* Follow button */}
          <button className="absolute top-4 right-4 bg-button-primary-background text-button-primary-text text-sm font-semibold py-1 px-4 rounded-full hover:to-button-primary-deemphasized-pressed transition">
            Follow
          </button>

          {/* Avatar + Name */}
          <div className="flex items-start gap-3">
            <img
              src={faker.image.avatar()}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-bold flex items-center gap-1">
                {name}
              </div>
              <div className="text-slate-500 text-sm">@{nickname}</div>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-2 text-sm">Animals 🦒 Nature 🦋 Discovery 🦎</p>

          {/* Following / Followers */}
          <div className="flex gap-4 mt-3 text-sm">
            <span>
              <span className="font-semibold">48</span> Following
            </span>
            <span>
              <span className="font-semibold">6M</span> Followers
            </span>
          </div>

          {/* Followed by */}
          <div className="flex items-center gap-2 mt-3 text-xs text-slate-500">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <img
                  key={i}
                  src={faker.image.avatar()}
                  className="w-5 h-5 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span>
              Followed by <span className="font-medium">Dimas Miftah</span>,{" "}
              <span className="font-medium">Imre Nagi</span>, and 2 others you
              follow
            </span>
          </div>

          {/* Profile Summary button */}
          <button className="mt-4 w-full border border-slate-300 rounded-full py-2 text-sm font-medium hover:bg-slate-50 transition">
            <span className="inline-flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0H8.25m7.5 0v10.5A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V9"
                />
              </svg>
              Profile Summary
            </span>
          </button>
        </div>
      </Popover.Body>
    </Popover>
  );
}
