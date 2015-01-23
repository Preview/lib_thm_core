/* global jQuery */

function toggleContainer(containerID)
{
    var container = jQuery(containerID);
    if (container.hasClass('shown'))
    {
        container.removeClass('shown');
        container.addClass('hidden');
    }
    else
    {
        container.removeClass('hidden');
        container.addClass('shown');
    }
}
