{if $blockCategTree && $blockCategTree.children|@count}
    <!-- Block categories module -->
    <div class="products-catalog open-category">
        {include file="./blockcategoriesitem.tpl" blockCategTree=$blockCategTree}
    </div>
    <!-- /Block categories module -->
{/if}
