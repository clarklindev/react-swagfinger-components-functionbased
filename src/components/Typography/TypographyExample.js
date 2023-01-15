import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from './Typography';

export const TypographyExample = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row gap-x-8 items-end'>
        <Heading1 as='h1'>H1 Heading</Heading1>
        <Heading2 as='h2'>H2 Heading</Heading2>
        <Heading3 as='h3'>H3 Heading</Heading3>
        <Heading4 as='h4'>H4 Heading</Heading4>
        <Heading5 as='h5'>H5 Heading</Heading5>
        <Heading6 as='h6'>H6 Heading</Heading6>
      </div>
      <p>
        this is paragraph text - Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus in dui facilisis turpis bibendum aliquam. Fusce
        mattis leo feugiat nulla pulvinar, ac blandit turpis vulputate. Proin
        nec justo eu lorem gravida aliquam tincidunt ut nunc. Suspendisse
        facilisis tortor in ante tristique lacinia. Proin placerat blandit leo.
        Nunc gravida, enim nec pretium condimentum, sem lorem tincidunt tellus,
        sed bibendum metus augue ac mauris. Integer pretium lacus at egestas
        hendrerit. Morbi quam arcu, suscipit sed massa sit amet, finibus gravida
        nisl. In lectus massa, ullamcorper eget aliquet pulvinar, vehicula ac
        sapien. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Aliquam suscipit sodales sapien. Fusce
        cursus, turpis id aliquam feugiat, nisl nulla blandit velit, at posuere
        sapien orci vel purus. Nam congue ultricies ornare. Duis accumsan cursus
        neque, eu porta turpis.
      </p>
    </div>
  );
};
