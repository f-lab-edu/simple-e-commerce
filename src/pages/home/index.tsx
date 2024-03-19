import { ContentSection } from './components/ContentSection';
import { Searchbox } from './components/Searchbox';
import { Filters } from './components/Filters';
import { ProductList } from './components/ProductList';

export default function HomePage() {
  return (
    <div className="px-5 py-2.5">
      <ContentSection>
        <Searchbox />
      </ContentSection>
      <ContentSection>
        <Filters />
      </ContentSection>
      <ContentSection>
        <ProductList />
      </ContentSection>
    </div>
  );
}
