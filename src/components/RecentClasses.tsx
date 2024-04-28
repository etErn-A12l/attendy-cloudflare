import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export function RecentClasses() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sreejan Naru</p>
          <p className="text-sm text-muted-foreground">sreejannaru@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">12</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>RD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Rituraj Debnath</p>
          <p className="text-sm text-muted-foreground">
            riturajdebnath@gmail.com
          </p>
        </div>
        <div className="ml-auto font-medium">6</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Avijit Sarkar</p>
          <p className="text-sm text-muted-foreground">
            avijitsarkar@gmail.com
          </p>
        </div>
        <div className="ml-auto font-medium">10</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>PM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Piyali Mukherjee</p>
          <p className="text-sm text-muted-foreground">
            piyali.mukherjee@gmail.com
          </p>
        </div>
        <div className="ml-auto font-medium">15</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>IB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ishani Bhowmick</p>
          <p className="text-sm text-muted-foreground">
            ishanibhowmick@gmail.com
          </p>
        </div>
        <div className="ml-auto font-medium">11</div>
      </div>
    </div>
  );
}
