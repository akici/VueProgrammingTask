import {
  Action, Module, Mutation, VuexModule,
} from 'vuex-module-decorators';
import { FilterKeyword } from '@/enum/filter';

@Module({ name: 'filter' })
export default class FilterModule extends VuexModule {
  filterKeyword: FilterKeyword = { description: '', amount: '' };

  get keyword(): FilterKeyword {
    return this.filterKeyword;
  }

  @Mutation
  setKeyword(keyword: FilterKeyword): void {
    this.filterKeyword = keyword;
  }

  @Action({ commit: 'setKeyword' })
  updateKeyword(keyword: FilterKeyword): FilterKeyword {
    return keyword;
  }
}
