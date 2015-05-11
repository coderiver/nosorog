<li {if isset($currentCategoryId) && $node.id == $currentCategoryId}class="active"{/if}>
    <a
            href="{$node.link|escape:'html':'UTF-8'}" title="{$node.desc|strip_tags|trim|escape:'html':'UTF-8'}">
        <span class="icon icon-arrow-right"></span> {$node.name|escape:'html':'UTF-8'}
    </a>
    {if $node.children|@count > 0}
        <ul>
            {foreach from=$node.children item=child name=categoryTreeBranch}
                {if $smarty.foreach.categoryTreeBranch.last}
                    {include file="$branche_tpl_path" node=$child last='true'}
                {else}
                    {include file="$branche_tpl_path" node=$child last='false'}
                {/if}
            {/foreach}
        </ul>
    {/if}
</li>
