import Image from 'next/image';

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover rounded-full"
        height={50}
        width={50}
        src={'https://avatars.githubusercontent.com/u/84264814?v=4'}
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
