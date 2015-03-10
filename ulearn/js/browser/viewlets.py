from five import grok
from plone import api
from zope.interface import Interface
from genweb.core.browser.viewlets import gwJSViewletManager

from ulearn.theme.browser.interfaces import IUlearnTheme


class gwJSDevelViewlet(grok.Viewlet):
    grok.context(Interface)
    grok.viewletmanager(gwJSViewletManager)
    grok.layer(IUlearnTheme)

    def is_devel_mode(self):
        return not api.env.debug_mode()


class gwJSProductionViewlet(grok.Viewlet):
    grok.context(Interface)
    grok.viewletmanager(gwJSViewletManager)
    grok.layer(IUlearnTheme)

    def is_devel_mode(self):
        return not api.env.debug_mode()
