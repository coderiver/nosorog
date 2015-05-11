<div class="orrange-bg">
    {l s='Categories' mod='blockcategoriescustom'}
</div>
<ul class="products-catalog-list">
    {foreach from=$blockCategTree.children item=child name=blockCategTree}
        {include file="$branche_tpl_path" node=$child}
    {/foreach}
</ul>